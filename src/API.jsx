const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/";

export async function loginAPI(loginObject, tokenR) {
  console.log("Login: ", loginObject);
  try {
    const response = await fetch(API_URL + "users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObject),
    });
    const res = await response.json();
    tokenR(res.token);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

export async function registerAPI(userObject, tokenR) {
  console.log("Registering user: ", userObject);
  try {
    const response = await fetch(API_URL + "users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    });
    const res = await response.json();
    if (res.message == "Registration successful") {
      tokenR(res.token);
      console.log("Register Success");
    } else {
      alert(res.message);
    }
  } catch (err) {
    console.error(err);
  }
}

export async function getUser(token, tokenR) {
  try {
    const response = await fetch(API_URL + "users/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await response.json();
    console.log("User Get", res);
    tokenR(res);
  } catch (err) {
    console.error(err);
  }
}

export async function getBooks(setR) {
  console.log("Get Books");
  try {
    const response = await fetch(API_URL + "books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    setR(res.books);
  } catch (err) {
    console.error(err);
  }
}

export async function getBook(id, setR) {
  console.log("Get Book: ", id);
  try {
    const response = await fetch(API_URL + `books/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    setR(res.book);
  } catch (err) {
    console.error(err);
  }
}

export async function checkoutBook(checkoutObject) {
  console.log("Book Update: ", checkoutObject);
  try {
    const response = await fetch(API_URL + `books/${checkoutObject.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${checkoutObject.token}`,
      },
      body: JSON.stringify({ available: checkoutObject.status }),
    });
    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}

export async function deleteReservation(token, id) {
  console.log("Deleting Reservation: ", id);
  try {
    const response = await fetch(API_URL + `reservations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const res = await response.json();
    console.log(res);
  } catch (err) {
    console.error(err);
  }
}
