<template>
    <ion-page>
        <ion-content>
            <ion-card>
                <ion-card-content>
                    <ion-img src="img/pucesdlogo.png"></ion-img>
                    <ion-list>
                        <ion-button @click="login" color="danger" expand="full">ACCEDER
                            <ion-icon slot="start" :icon="logoGoogle"></ion-icon>
                        </ion-button>
                    </ion-list>
                </ion-card-content>
            </ion-card>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" setup>
import { IonPage, IonContent, IonCard, IonCardContent, IonIcon, IonImg, IonLabel, IonInput, IonChip, IonList, IonButton } from '@ionic/vue';
import { logoGoogle } from "ionicons/icons";
import { ref } from 'vue';
import { useUserStore, User } from '@/store/userStore';
import { useRouter } from 'vue-router';
import { GoogleAuth, User as UserG } from '@codetrix-studio/capacitor-google-auth';

// use hook after platform dom ready
GoogleAuth.initialize({
    clientId: '452039174194-a7bfjt4rvn8g24i4ue09p80s4ufld13o.apps.googleusercontent.com',
    scopes: ['profile', 'email'],
    grantOfflineAccess: true,
});
const router = useRouter();

const userStore = useUserStore();


async function login() {
    const resp: UserG = await GoogleAuth.signIn();
    if (resp) {
        console.log(resp);
        router.replace({ name: 'Home' })
    }
}

</script>

<style></style>