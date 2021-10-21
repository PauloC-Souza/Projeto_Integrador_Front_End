<template>
  <div class="bg">
    <v-card class="mx-auto mt-10" max-width="90%" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-overline mb-4">
            Programa de benefícios AMBEV
          </div>
          <v-list-item-title class="text-h3 mb-1">
            Principais ofertas
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions class="d-block">
        <v-row class="mt-10 justify-center">
          <v-col  v-for="item in itens" :key="item" cols="12" md="3">
            <v-card :loading="loading" class="mx-auto my-12" max-width="374" height="510">
              <template slot="progress">
                <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
                ></v-progress-linear>
              </template>

              <v-img height="250" :src="item.img"></v-img>

              <v-card-title>{{item.name}}</v-card-title>

              <v-card-text>
                <div class="mt-n2 text-subtitle-1">
                  $ • {{item.valor}} pontos
                </div>

                <div style="height: 100px">
                  {{item.desc}}
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Saiba mais
                </v-btn>
                <v-btn color="deep-purple lighten-2" text @click="reserve">
                  Trocar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import geladeira from '../assets/geladeira.png';
import frigobar from '../assets/frigobar.png';
import carnaval from '../assets/carnaval.png';

export default {
  data() {
    return {
      user: { name: 'Leonardo de Carvalho', balance: 12800 },
      itens: [
        {
          img: geladeira,
          name: 'Geladeira Brahma',
          desc: 'Garanta a alegria da galera com a cerveja gelada! Não se preocupe mais com convidados chatos que não bebem cerveja quente...',
          valor: '370.000',
        },
        {
          img: frigobar,
          name: 'Frigobar Skol',
          desc: 'Quem nunca sonhou com um frigobar ao lado da cama? Essa é a sua chance!',
          valor: '180.000',
        },
        {
          img: carnaval,
          name: 'Carnaval de Salvador 2022',
          desc: 'Mais de 60 atrações divididas em 6 dias do carnaval mais épico do Brasil. Venha conhecer o Camarote Salvador e viver o melhor carnaval da sua vida! Exclusivo. Inexplicável. Inovador. Surpreendente!',
          valor: '500.000',
        },
      ],
    };
  },
};
</script>
<style scoped>
.bg {
  background-color: #081c39;
  max-height: 300px;
}
</style>
