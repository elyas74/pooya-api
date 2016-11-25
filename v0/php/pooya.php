<?php

/**
 * Pooya API Class.
 * @author Sepehr Mohaghegh <sepehr.mohaghegh@hotmail.com>
 */
class pooya
{

    private $key = '';
    public function __construct($username, $password)
    {
        $auth = $this->sendAPIRequest('http://pooya.sadjad.ac.ir', [
            'username' => $username,
            'password' => $password
        ], true);

        if ( isset($auth['secret']) ) {
            $this->key = $auth['secret'];
        }
    }

    public function get_key()
    {
        return $this->key;
    }

    public function notifications()
    {
        return $this->sendAPIRequest('http://pooya.sadjad.ac.ir/notifications', [], false, $this->key);
    }


    public function data()
    {
        return $this->sendAPIRequest('http://pooya.sadjad.ac.ir/init_data', [], false, $this->key);
    }


    private function sendAPIRequest($url, $content, $cookie = false, $key = null) {
        $ch = curl_init();
        $content = json_encode($content);
        if ($key) {
            $header = ['Content-Type: application/json', 'Cookie: secret=' . $key];
        } else {
            $header = ['Content-Type: application/json'];
        }

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_HEADER, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $content);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

        $result = curl_exec($ch);
        $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
        $body = substr($result, $header_size);
        preg_match_all('/^Set-Cookie:\s*([^;]*)/mi', $result, $matches);
        $cookies = array();
        foreach($matches[1] as $item) {
            parse_str($item, $cookie);
            $cookies = array_merge($cookies, $cookie);
        }

        curl_close($ch);
        return $cookie ? $cookies : $body;
    }
}