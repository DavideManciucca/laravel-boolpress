<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Post;

class PageController extends Controller
{
    public function index(){
        $posts = Post::with('tags')->get();
        // $posts = Post::all();
        // return response()->json($posts);
        return response()->json(compact('posts'));
    }
}
