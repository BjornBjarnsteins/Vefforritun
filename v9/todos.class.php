<?php

class Todo
{
	public $id;
	public $title;
	public $finished;
	public $key;

  public function __construct($id, $title, $finished, $key) {
    $this->id = $id;
    $this->title = $title;
    $this->finished = $finished;
    $this->key = $key;
  }
}

class Todos
{
	private $pdo;

	private $results = array();

	/**
	 * Búa til Todos hlut sem tekur við $pdo breytu -- inniheldur uppsetta tengingu við gagnagrunn
	 */
	public function __construct($pdo)
	{
		$this->pdo = $pdo;
	}

	/**
	 * Fyrir: Hlutur er með uppsettann $pdo hlut
	 * Eftir: Búið er að bæta við færslu með titil. Ef key er gefið var færslan búin til undir honum, annars var búinn til nýr lykill.
	 *        Skilar lykil sem færsla var búin til undir
	 */
	public function Insert($title, $key = '')
	{
    if (!$key) $key = uniqid();

    $sql = 'INSERT INTO todos
      (id, title, finished, key)
      VALUES (?, ?, ?, ?)';

    $sth = $pdo->prepare($sql);

    $sth->execute(array(uniqid(),
                        $title,
                        0,
                        $key));

    $pdo->commit();
  }

	/**
	 * Fyrir: $key er sett sem lykill á færslum, $data er fylki með POST upplýsingum,
	 *        þar sem hugsanlega eru færslur sem heita "finished_X" þar sem X er auðkenni færslu sem á að klára
	 * Eftir: Búið er að merkja allar merktar færslur sem kláraðar, allar hinar sem ekki kláraðar
	 */
	public function UpdateFinished($key, $data)
	{
		/*
			1. Finna allar færslur merktar með finished_X
			2. Finna allar færslur
			3. Finna útfrá 1. og 2. þær færslur sem eru *ekki* kláraðar
			4. Kalla í SetState fyrir báða lista af færslum
		*/
	}

	/**
	 * Fyrir: $key er sett sem lykill á færslum, $data er fylki með POST upplýsingum,
	 *        þar sem hugsanlega eru færslur sem heita "delete_X" þar sem X er auðkenni færslu sem á að eyða
	 * Eftir: Búið er að eyða öllum færslum sem merktar voru
	 */
	public function DeleteItems($key, $data)
	{
	}

	/**
	 * Fyrir: $key er lykill sem sækja á færslur fyrir
	 * Eftir: Skilar fylki af Todo hlutum eða tóma fylkinu
	 */
	public function Fetch($key)
	{
	}

	/**
	 * Fyrir: Búið er að sækja færslur með Fetch
	 * Eftir: Skilar heildarfjölda færsla
	 */
	public function Total()
	{
	}

	/**
	 * Fyrir: Búið er að sækja færslur með Fetch
	 * Eftir: Skilar fjölda færsla sem búið er að klára
	 */
	public function Remaining()
	{
	}

	/**
	 * Fyrir: Búið er að sækja færslur með Fetch
	 * Eftir: Skilar niðurstöðum úr Fetch
	 */
	public function Results()
	{
	}

	/**
	 * Fyrir: key er lykill á færslu og id er auðkenni á færslu
	 * Eftir: Skilar true ef færslu var eytt en false annars
	 */
	private function Delete($id, $key)
	{
	}

	/**
	 * Fyrir: state er bool fyrir stöðu á færslu, key er lykill á færslu og id er auðkenni á færslu
	 * Eftir: Skilar true ef færslu var merkt rétt en false annars
	 */
	private function SetState($state, $id, $key)
	{
	}
}
