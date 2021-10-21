<template>
  <div>
    <v-card
      id="login" 
      max-height="374"
    >
     <v-card-title>
      <h1 class="font-weight-bold white--text pl-2"> ambev </h1>
      </v-card-title>
    
      <v-card-title >
        <h1 class="font-weight-bold white--text ml-10"> Entrar em minha conta </h1>
      </v-card-title>
      <v-card  
        class="mx-auto my-12"
        max-width="700"
        id=card
      >
       <v-form
        :ref="refFormLogin"
        v-model="validForm"
      >
        <v-container>
          <v-row>
            <v-col>
              <img 
                src="https://picsum.photos/350/165?random"
                alt="Imagem Login"
                height="300px"
                width="350"
              />
              
            </v-col>
            <v-col>
              <v-row>
                <v-col>
                  <v-text-field
                    label="E-mail"
                    required
                    outlined
                  />
                </v-col>
              </v-row>

              <v-row>
              <v-col>
                <v-text-field
                  label="Senha"
                  type="password"
                  required
                  outlined
                />
              </v-col>
             </v-row>
             
               <v-row class="ma-0">
                 <v-col>
                  <span>
                    Esqueceu sua senha?
                  </span>
                 </v-col>
               </v-row>
               <v-row justify="center">
                <v-col>
                <v-btn id="buttonEntrar" type="submit">Entrar
                  <b class="black--text" />
                </v-btn>
              </v-col>
            </v-row>
         
          </v-col>
        </v-row>

        </v-container>
      </v-form>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {

  validForm= "";
}
</script>

<style scoped>
#login{
  background-color:#081C39;
}
#card{
  min-height: 350px;
}
#buttonEntrar{
  background-color:#081C39;
  color: white;
}
</style>
