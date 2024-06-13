<?php

namespace App\Http\Controllers;

use App\Http\Resources\TopicResource;
use App\Models\Topic;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class TopicController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        $topics = Topic::with(['tickets', 'children'])->get();

        $topics->load('children');

        return TopicResource::collection($topics);
    }
}
