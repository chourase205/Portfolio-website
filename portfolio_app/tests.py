from django.test import TestCase, Client
from django.urls import reverse

class PortfolioViewTests(TestCase):
    def setUp(self):
        self.client = Client()

    def test_portfolio_page_loads_successfully(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')
        self.assertTemplateUsed(response, 'base.html')

    def test_portfolio_contains_key_sections(self):
        response = self.client.get('/')
        content = response.content.decode('utf-8')

        # Brand & Nav
        self.assertIn('Mayuri', content)
        self.assertIn('About', content)
        self.assertIn('Experience', content)
        self.assertIn('Projects', content)
        self.assertIn('Skills', content)
        self.assertIn('Education', content)
        self.assertIn('Contact', content)

        # Hero
        self.assertIn('AVAILABLE FOR SOFTWARE &amp; PYTHON ROLES', content)
        self.assertIn('MAYURI', content)
        self.assertIn('CHOURASE', content)
        self.assertIn('Computer Science Graduate &amp; Software Developer', content)

        # Flagship Project
        self.assertIn('EchoSphere', content)
        self.assertIn('FLAGSHIP PROJECT', content)

        # Skills & Education
        self.assertIn('Skills &amp; Technology Matrix', content)
        self.assertIn('UIT Barkatullah University, Bhopal', content)
        self.assertIn('Engineering Philosophy', content)

