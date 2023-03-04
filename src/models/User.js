
export const UserModel = {
  accessToken: "TestToken",
  userInfo: {
    Fname: "TestName",
    LnameM: "TestLastName",
    LnameP: "TestLastName",
    code_conexion: "12345678",
    email: "TestUser@gmail.com",
    id_user: 100,
    state: 6,
    user_rol: 1
  }
}

export const UserModelAdmin = {
  accessToken: "AdminToken",
  userInfo: {
    Fname: "AdminName",
    LnameM: "AdminLastName",
    LnameP: "AdminLastName",
    code_conexion: "12312312",
    email: "AdminUser@gmail.com",
    id_user: 101,
    state: 6,
    user_rol: 2
  }
}

export const UsersModel = [
  {"id_user":1,"user_rol":"Usuario","Fname":"Manuel","LnameP":"Alcides","LnameM":"Carrion","dni":"70192219","username":"manueluser","password":"contrasenia","email":"manuelalcides1@gmail.com","phone":"922322322","address":"Av. La cruz 323","type":"personal","token":"tokenenv","id_service_child":1},{"id_user":2,"user_rol":"Usuario","Fname":"Jose","LnameP":"Carrion","LnameM":"Carrisales","dni":"70918923","username":"juanuser","password":"contraseniajuan","email":"juancarrion1@gmail.com","phone":"912345678","address":"Av. La torre 332","type":"tokentest","token":"tokenenv","id_service_child":1},{"id_user":3,"user_rol":"Administrador","Fname":"Alberto","LnameP":"Cutipa","LnameM":"Maquera","dni":"71308923","username":"adminuser","password":"adminpassword","email":"newadminemail@gmail.com","phone":"922142378","address":"Av. Independencia 332","type":"personal","token":"tokenenv","id_service_child":3},{"id_user":28,"user_rol":"Usuario","Fname":"testUser","LnameP":"mamani","LnameM":"alcides","dni":"12345678","username":"user","password":"pass","email":"ModifiedUserMamani@gmail.com","phone":"123456789","address":"Jr. America 322","type":"persontestdefault","token":"tokendefault","id_service_child":5}
];