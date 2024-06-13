<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChildrenTopicResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "topic_id" => $this->topic_id,
            "topic_parent_id" => $this->topic_parent_id,
            "name" => $this->name,
            "ticket_count" => $this->tickets->count(),
            "tickets" => TicketResource::collection($this->tickets),
        ];
    }
}
