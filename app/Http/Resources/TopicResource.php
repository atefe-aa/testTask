<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TopicResource extends JsonResource
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
            "tickets_count" => $this->calculateTotalTicketsCount(),
            "tickets" => TicketResource::collection($this->tickets),
            "children" => ChildrenTopicResource::collection($this->children),
        ];
    }

    private function calculateTotalTicketsCount(): int
    {
        $totalTicketsCount = $this->tickets->count();

        foreach ($this->children as $child) {
            $totalTicketsCount += $child->tickets->count();
        }

        return $totalTicketsCount;
    }
}
