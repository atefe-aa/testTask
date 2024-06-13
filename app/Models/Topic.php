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
    protected $primaryKey = 'topic_id';

    // Relationship to tickets
    public function tickets(): HasMany
    {
        return $this->hasMany(Ticket::class, 'topic_id', 'topic_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(__CLASS__, 'topic_parent_id', 'topic_id');
    }
}
