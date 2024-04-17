const Aside = () => {
    return <aside>
       <div class="form-floating mb-3">
         <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"></input>
         <label for="floatingInput">Correo de Usuario</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
  <label for="floatingPassword">Contraseña</label>
</div>
    </aside>;
}

export default Aside;