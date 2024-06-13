<?php

namespace Database\Factories;

use App\Models\Model;
use App\Models\Topic;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Model>
 */
class TopicFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $existingTopicIds = Topic::pluck('topic_id')->toArray();

        // Randomly choose a topic_id from existing IDs or default to 0
        $parentId = count($existingTopicIds) > 0 && $this->faker->boolean(50)
            ? $this->faker->randomElement($existingTopicIds)
            : 0;


        return [
            'topic_parent_id' => $parentId,
            'name' => $this->faker->words(3, true),
        ];
    }
}
