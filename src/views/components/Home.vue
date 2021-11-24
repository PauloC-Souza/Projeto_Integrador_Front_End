<template>
  <div>
    <app-header class="mb-10"/>
    <div class='bg'>
      <v-card class='mx-auto mt-16' max-width='90%' outlined>
        <v-list-item class="mt-10" three-line>
          <v-list-item-avatar class='ma-10' size='120'>
            <img :src='Leonardo' alt='' />
          </v-list-item-avatar>
          <v-list-item-content>
            <div class='text-overline mb-4'>
              Programa de benefícios AMBEV
            </div>
            <v-list-item-title class='text-h3 mb-1'>
              {{ user.name }}
            </v-list-item-title>
            <v-list-item-subtitle class='text-h4'
              >{{ user.balance }} CRÉDITOS</v-list-item-subtitle
            >
          </v-list-item-content>
          <div>
            <v-btn
              color="blue-grey"
              class="ma-2 white--text"
              @click="goTo()"
            >
              Ver ofertas
              <v-icon
                right
                dark
              >
                mdi-cart
              </v-icon>
            </v-btn>
          </div>
        </v-list-item>

        <v-card-actions class="d-block">
          <v-row class="mt-10 mb-6 justify-center">
              <v-data-table
                  style='width: 80%'
                  :headers='headers'
                  :items='desserts'
                  :items-per-page='5'
                  class='elevation-1'
              ></v-data-table>
          </v-row>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
import AppHeader from '../AppHeader.vue';
import Leonardo from '../../assets/leonardo.jpg';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      Leonardo,
      user: { name: 'Leonardo de Carvalho', balance: 12800 },
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Local', value: 'local' },
        { text: 'Localidade', value: 'localidade' },
        { text: 'Última atualização', value: 'atualizacao' },
        { text: 'Quantidade', value: 'qtd' },
      ],
      desserts: [
        {
          id: 1,
          local: 'Bar do Zeca',
          localidade: 'Rua João Francisco, 38 - 30494-123 Belo Horizonte',
          atualizacao: '04/30/19 10:03',
          qtd: 2400,
        },
        {
          id: 2,
          local: 'Supermercados BH',
          localidade: 'Rua João, 1438 - 78892-793 São Paulo',
          atualizacao: '04/30/19 10:03',
          qtd: 250,
        },
        {
          id: 3,
          local: 'Carrefour Bairro',
          localidade: 'Rua Francisco, Loja 2 - Belo Horizonte',
          atualizacao: '04/30/19 10:03',
          qtd: 700,
        },
      ],
    };
  },
  methods: {
    goTo() {
      this.$router.push('/ofertas');
    },
  },
};
</script>
<style scoped>
.bg {
  background-color: #081c39;
  max-height: 400px;
  margin-top: 50px;
}
</style>
