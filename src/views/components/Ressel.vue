<template>
  <div>
    <app-header class="mb-10"/>
    <div class='bg'>
      <v-card class='mx-auto mt-10' max-width='90%' outlined>
        <v-list-item class="mt-10" three-line>
          <v-list-item-content>
            <div class='text-overline mb-4'>
              Programa de benefícios AMBEV
            </div>
            <v-list-item-title class='text-h3 mb-1 text-center'>
              <div class="align-center text-center">
                <p style="font-size: 30px">Hoje, 1 AMBEVCOIN vale:</p>
                <div class="mt-n4 align-center text-center">
                  <span style="font-size: 20px">R$</span>
                  <span style="font-size:50px">0,04</span>
                </div>
              </div>
              <div class="align-center text-center">
                <p style="font-size: 30px">Minha quantidade:</p>
                <div class=" mt-n4 align-center text-center">
                  <span style="font-size:30px">12.800,00</span>
                </div>
              </div>
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-content>
            <v-list-item-title class='text-h3 mb-1 text-center'>
              <v-bottom-navigation
                v-model="value"
                :input-value="active"
                color="indigo"
              >
                <v-btn :style="value === 0 ? 'background-color: green' : ''">
                  <span :style="value === 0 ? 'color: white' : 'color: green'">
                    Comprar
                  </span>
                </v-btn>

                <v-btn :style="value === 1 ? 'background-color: red' : ''">
                  <span :style="value === 1 ? 'color: white' : 'color: red'">
                    Vender
                  </span>
                </v-btn>

              </v-bottom-navigation>
              <v-row class="mt-10">
                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="price"
                    prefix="$"
                    label="Preço"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  sm="6"
                >
                  <v-text-field
                    v-model="qty"
                    label="Quantidade"
                    outlined
                  >
                  </v-text-field>
                </v-col>
                <v-col
                  v-if="value === 1"
                  cols="12"
                  style="font-size: 20px"
                >
                  <p>Você receberá: R${{ total }}</p>
                  <v-btn color="error">
                    VENDER
                  </v-btn>
                </v-col>
                <v-col
                 v-else
                  cols="12"
                  style="font-size: 20px"
                >
                  <p>Você pagará: R${{ total }}</p>
                  <v-btn color="success">
                    COMPRAR
                  </v-btn>
                </v-col>
              </v-row>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import AppHeader from '../AppHeader.vue';

export default {
  components: {
    AppHeader,
  },
  data() {
    return {
      price: 0,
      qty: 0,
      value: 1,
      active: true,
    };
  },
  methods: {
    goTo() {
      this.$router.push('/ofertas');
    },
  },
  computed: {
    total() {
      return this.price * this.qty;
    },
  },
};
</script>
<style scoped>
.bg {
  background-color: #081c39;
  height: 1000px;
}

</style>
