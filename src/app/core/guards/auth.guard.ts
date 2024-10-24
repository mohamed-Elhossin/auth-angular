import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  if (token) {
     
    return true;
  } else {
    let router = new Router(); // إذا لم يكن موجوداً، أعد التوجيه إلى صفحة تسجيل الدخول
    router.navigate(['/login']);
    return false;
  }
};
