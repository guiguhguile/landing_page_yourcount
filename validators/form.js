import { z } from "zod";

export const schemaForm = z.object({
  name: z.string().min(1, "Insira seu nome"),
  email: z.string().min(1, "Insira seu email").email("Formato inválido"),
  phone: z.string().min(1, "Insira seu telefone"),
  enterpriseName: z.string().min(1, "Insira o nome da sua empresa"),
  invoice: z.string().min(1, "Selecione o faturamento da sua empresa"),
});
 