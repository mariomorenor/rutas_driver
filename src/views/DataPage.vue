<template>
    <ion-menu content-id="main-content">
      <ion-header>
        <ion-toolbar color="tertiary">
          <ion-title>Datos del Usuario</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">       <!--Menu Content -->

        <img class='CircleP' alt="Usuario" src="img/elconductoruriel.jpg" />

        <h1 v-text="user.name, user.last_name">
        </h1>

        <h2 v-text="cedule.cedule">
        </h2>

        <h3 v-text="email.gmail">
        </h3>

      </ion-content>
    </ion-menu>
    
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title><!-- Contenido de Pagina (Inexistente)--></ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding"> <!-- Contenido de Pagina (Inexistente)--> </ion-content>
    </ion-page>
  </template>
  
  <script setup lang="ts">
    import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { ref } from 'vue';

            

    const user = ref({
        name:"URIEL",
        last_name:"PARRAGA"
    })

    const cedule = ref({
        cedule:"2300416597"
    })

    const email = ref({
        gmail: "uriel@pucesd.edu.ec"
    })

  </script>
  
  <style scoped>
    ion-menu::part(backdrop) {
      background-color: rgba(255, 0, 255, 0.5);
    }
  
    .CircleP {
      border-radius: 300px;
      width: 200px;
      height: 200px;
      box-shadow: 4px 0px 16px rgba(255, 0, 255, 0.18);
    }


  </style>