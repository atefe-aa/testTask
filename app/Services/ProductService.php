<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class ProductService
{
    public function getProduct($id)
    {
        $url = config('services.product.url');
        $response = Http::get($url . '/' . $id);


        if ($response->successful()) {
            $data = $response->json();
            Log::info($data);

            return $data;
        }

        return ['error' => 'Failed to fetch data from the external URL'];
    }
}
