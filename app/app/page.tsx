"use client";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  function handleLogin(e) {
    e.preventDefault();
    router.push("/dashboard");
  }

  return (
    <div className="container">
      <div className="card">

        <div className="logo">
          <img src="/logo.png" />
        </div>

        <h1>nle sensi</h1>

        <form onSubmit={handleLogin}>
          <label>Login</label>
          <input type="text" placeholder="Digite seu usuário" required />

          <label>Senha</label>
          <input type="password" placeholder="Digite sua senha" required />

          <button type="submit">Entrar</button>
        </form>

      </div>
    </div>
  );
}
