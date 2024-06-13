<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    protected ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * @param int $id
     * @return JsonResponse
     * @throws ConnectionException
     */
    public function show(int $id): JsonResponse
    {
        if (!is_numeric($id)) {
            return response()->json(['error' => 'Invalid product ID'], 400);
        }

        $responseData = $this->productService->getProduct($id);
        if ($responseData['status'] === 404) {
            return response()->json(['error' => 'Product not found.'], $responseData['status']);
        }

        return response()->json($responseData);
    }

    /**
     * Generate and download a PDF for the product.
     *
     * @param int $id
     * @return Response|JsonResponse
     * @throws ConnectionException
     */
    public function downloadPdf(int $id): Response|JsonResponse
    {
        $responseData = $this->productService->getProduct($id);
        if ($responseData['status'] !== 200) {
            return response()->json(['error' => 'Services error.'], $responseData['status']);
        }
        $product = $responseData['data']['product'];
        Log::info($product);
        $pdf = PDF::loadView('product.pdf', compact('product'));

        // Set options for DomPDF
        $pdf->getDomPDF()->getOptions()->set('isHtml5ParserEnabled', true); // Enable HTML5 parser
        $pdf->getDomPDF()->getOptions()->set('isPhpEnabled', true); // Enable PHP processing

        // Download the PDF
        return $pdf->download('product.pdf');
    }
}
