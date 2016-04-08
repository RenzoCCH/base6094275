<?php
use App\Http\Controllers\snakeSocketController;
use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use App\Http\Controllers\ChatController;

require  'vendor/autoload.php';


$server = IoServer::factory(
	new HttpServer(
		new WsServer(
			new snakeSocketController()
		)
	),
	2000
);

$server->run();

?>