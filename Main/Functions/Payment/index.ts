import { MercadoPagoConfig, Payment } from 'mercadopago';
import { v4 as uuidv4 } from 'uuid';

const client = new MercadoPagoConfig({
  accessToken: 'access_token',
  options: {
    timeout: 5000,
    idempotencyKey: 'abc'
  }
});

const requestOptions = {
  idempotencyKey: uuidv4(),
};

const payment = new Payment(client);

class Payments {

  private R: any;
  private R2: any;

  public async Create(a: number, b: string, c: string) {
    const body = {
      transaction_amount: a,
      description: '<DESCRIPTION>',
      payment_method_id: b,
      payer: {
        email: c
      },
    };

    this.R = await payment.create({ body, requestOptions }).then(console.log).catch(console.log);

  }

  public async Get() {
    setTimeout(async () => {
      try {
        this.R2 = await payment.get({ id: this.R.response.body.id });
      }
      catch (e) {
        console.error('Erro ao obter o pagamento:', e);
      }

    }, 5 * 60 * 1000);
  }
} export default Payments;