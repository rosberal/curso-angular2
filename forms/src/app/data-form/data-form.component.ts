
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../shared/services/dropdown.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { EstadoBr } from './../shared/models/estado-br.model';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formulario: FormGroup;

estados: EstadoBr[];

  constructor(
    private formBuilder: FormBuilder,
    private http: Http,
    private dropDownService: DropdownService
  ) {}

  ngOnInit() {
    /*     this.formulario = new FormGroup({
nome: new FormControl(null),
email: new FormControl(null),

    }); */

 this.dropDownService.getEstadosBr()
.subscribe(dados => {
  this.estados = dados;
  console.log('estados', this.estados);
}

);

    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [Validators.required, Validators.minLength(3), Validators.maxLength(50)]
      ],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, Validators.required],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      })
    });
  }

  onSubmit() {
    console.log(this.formulario);

    if (this.formulario.valid) {
      // this.http.post('teste/teste', JSON.stringify(this.formulario.value))
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formulario.value))
        .map(res => res)
        .subscribe(
          dados => {
            console.log(dados);
            this.resetar();
          },
          (error: any) => alert('erro no post')
        );
    } else {
      console.log('"formulario invalido');
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formgroup: FormGroup) {
    Object.keys(formgroup.controls).forEach(campo => {
      console.log(campo);
      const controle = formgroup.get(campo);
      controle.markAsDirty();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  resetar() {
    this.formulario.reset();
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo)
    };
  }

  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty)
    );
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('email');
    // console.log('campoemail', campoEmail);

    if (campoEmail.errors) {
      return {
        'invalid-feedback': !(campoEmail.errors['email'] && campoEmail.touched)
      };
    }
    return { 'invalid-feedback': true };
  }

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep').value;
    console.log(cep);
    cep = cep.replace(/\D/g, '');
    if (cep != '') {
      let validacep = /^[0-9]{8}$/;
      if (validacep.test(cep)) {
        this.resetaDadosForm();
        this.http
          .get(`//viacep.com.br/ws/${cep}/json/`)
          .map(dados => dados.json())
          .subscribe(dados => this.populaDadosForm(dados));
      }
    }
  }

  populaDadosForm(dados) {
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

    this.formulario.patchValue({
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

  resetaDadosForm() {
    this.formulario.patchValue({
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
