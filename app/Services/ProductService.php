<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class ProductService
{
    public function getProduct($id)
    {
        $response = Http::get('https://external-url.com/api/resource/' . $id);


        if ($response->successful()) {
            $data = $response->json();

            $data['new_key'] = 'new_value';

            return $data;
        }

        return ['error' => 'Failed to fetch data from the external URL'];
    }
}
