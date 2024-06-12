<?php

namespace App\Http\Controllers;

use App\Services\ProductService;
use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    protected ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function show(int $id): JsonResponse
    {
        if (!is_numeric($id)) {
            return response()->json(['error' => 'Invalid product ID'], 400);
        }

        $responseData = $this->productService->getProduct($id);

        return response()->json($responseData);
    }
}
