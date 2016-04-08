<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//use App\Http\Requests;
//use App\Http\Controllers\Controller;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class snakeSocketController implements MessageComponentInterface
{
	protected $clients;
	private $subscriptions;
	private $users;

	public function __construct()
	{
		$this->clients = new \SplObjectStorage;
	}

	public function onOpen(ConnectionInterface $conn)
	{
		$this->clients->attach($conn);
		echo "New connection! ({$conn->resourceId})\n";
	}

	public function onMessage(ConnectionInterface $conn, $msg)
	{
 		foreach ($this->clients as $client) {
			if ($conn !== $client) {
				$client->send($msg);
			}
		}
	}

	public function onClose(ConnectionInterface $conn)
	{
		$this->clients->detach($conn);
		unset($this->users[$conn->resourceId]);
	}

	public function onError(ConnectionInterface $conn, \Exception $e)
	{
		echo "An error has occurred: {$e->getMessage()}\n";
		$conn->close();
	}
}
