<?php

namespace Database\Factories;

use App\Models\Ticket;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $existingTopicIds = Topic::pluck('topic_id')->toArray();

        // Randomly choose a topic_id from existing IDs or create one
        $topicId = count($existingTopicIds) > 0
            ? $this->faker->randomElement($existingTopicIds)
            : Topic::factory();
        return [
            'topic_id' => $topicId,
            'body' => $this->faker->paragraph,
        ];
    }
}
