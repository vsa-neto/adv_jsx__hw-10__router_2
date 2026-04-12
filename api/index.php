<?php
declare(strict_types=1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
// $post = json_decode(file_get_contents('php://input'));  //  НЕ ПРИХОДЯТ ДАННЫЕ, В ЧЕМ ПРИЧИНА?

$post = json_decode(file_get_contents('example.json'));

var_dump($post);
echo "\n";

$file = 'data.json';
$posts = json_decode(file_get_contents($file));

if ($post) {
    $newPost = [
        'id' => $post->id,
        'name' => 'T-800',
        'status' => 'участник группы',
        'time' => '20 мин',
        'content'=> $post->content,
    ];
    $posts[] = $newPost;
    $final_data = json_encode($posts, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents($file, $final_data);
} else {
    echo "no results";
}



//


