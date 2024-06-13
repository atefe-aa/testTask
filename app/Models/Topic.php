<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Topic extends Model
{
    use HasFactory;

    protected $fillable = [
        'parent_topic_id',
        'name'
    ];

    public function children(): HasMany
    {
        return $this->hasMany(__CLASS__, 'parent_topic_id');
    }

    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'topic_id');
    }
}
