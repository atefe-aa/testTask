<?php

namespace App\Services;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Support\Facades\Http;

class ProductService
{
    /**
     * @throws ConnectionException
     */
    public function getProduct($id)
    {
        $url = config('services.product.url');

        $response = Http::withHeaders([
            'Accept' => 'application/json',
        ])->get($url . '/' . $id . '/');

        if ($response->successful()) {
            $data = $response->json();
            return $data;
        }

        return ['error' => 'Failed to fetch data from the external URL'];
    }
}
