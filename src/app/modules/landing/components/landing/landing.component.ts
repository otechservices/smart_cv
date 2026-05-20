import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {

  features = [
    {
      icon: 'pi-file-edit',
      title: 'CV Professionnel',
      desc: 'Créez un CV percutant en quelques minutes grâce à notre éditeur guidé et nos templates modernes.',
      color: '#6366f1',
      bg: '#eef2ff',
    },
    {
      icon: 'pi-sparkles',
      title: 'Lettre IA',
      desc: 'Notre IA rédige une lettre de motivation personnalisée à partir de votre profil et de l\'offre d\'emploi.',
      color: '#8b5cf6',
      bg: '#f5f3ff',
    },
    {
      icon: 'pi-briefcase',
      title: 'Suivi des candidatures',
      desc: 'Centralisez toutes vos candidatures et suivez leur avancement en temps réel.',
      color: '#0ea5e9',
      bg: '#f0f9ff',
    },
  ];

  steps = [
    { num: '01', title: 'Créez votre profil', desc: 'Renseignez vos expériences, compétences et formations.' },
    { num: '02', title: 'Générez votre CV', desc: 'Notre IA optimise la mise en page et le contenu pour chaque offre.' },
    { num: '03', title: 'Postulez & suivez', desc: 'Envoyez vos candidatures et suivez chaque étape depuis un seul endroit.' },
  ];

  plans = [
    {
      name: 'Free',
      price: '0€',
      period: '',
      features: ['1 template CV', '5 lettres / mois', 'Candidatures manuelles'],
      cta: 'Commencer gratuitement',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: '9.99€',
      period: '/ mois',
      features: ['5 templates CV', '50 lettres / mois', '20 candidatures auto', 'Optimisation IA'],
      cta: 'Essayer Premium',
      highlighted: true,
    },
    {
      name: 'Pro',
      price: '19.99€',
      period: '/ mois',
      features: ['Tous les templates', 'Lettres illimitées', 'Candidatures illimitées', 'IA prioritaire'],
      cta: 'Passer Pro',
      highlighted: false,
    },
  ];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isAuthenticated()) {
      const role = this.auth.getUser()?.role;
      this.router.navigate([role === 'admin' ? '/admin' : '/app/dashboard']);
    }
  }
}
