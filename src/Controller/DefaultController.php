<?php

namespace App\Controller;

use App\Service\Data\Query;
use App\Service\Views\View;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function test()
    {
        return $this->render('base.html.twig');
    }
}
