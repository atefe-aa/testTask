<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    protected ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    /**
     * @throws ConnectionException
     */
    public function show(int $id): JsonResponse
    {
        if (!is_numeric($id)) {
            return response()->json(['error' => 'Invalid product ID'], 400);
        }

        $responseData = $this->productService->getProduct($id);
        if ($responseData['status'] !== 200) {
            return response()->json(['error' => 'Services error.'], $responseData['status']);
        }

        return response()->json($responseData);
    }
}
