import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: '',
    email: ''
  };

  constructor(private http: Http) {}

  ngOnInit() {}

  onSubmit(formulario) {
    console.log('form do on submit', formulario);

    this.http.post('teste/teste', JSON.stringify(formulario.value))
    // this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    
  .map(res => res)
  .subscribe(dados => {
    console.log(dados);
    formulario.form.reset();
  }


);

  }

  consultaCEP(cep, form) {
    console.log(cep);

    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaDadosForm(form);
        this.http
          .get(`//viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados, formulario) {
/*     formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    }); */

    formulario.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

resetaDadosForm(formulario) {
   formulario.form.patchValue({
    endereco: {
      rua: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    }
   });
  }
}
