import { HttpInterceptorFn, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';

// export const authMiddelwereInterceptor: HttpInterceptorFn = (req, next) => {
//   let token = localStorage.getItem('token');
//   console.log(token);

//     const newReq = req.clone({
//       headers: new HttpHeaders({
//         Authorization: `Bearer ${token}`,
//       }),
//     });
//     return next(newReq);

// };
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../controllers/auth.service';

export const authMiddelwereInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('token');
  console.log(token);
  let authService = inject(AuthService);
  if (!token) {
    return next(req).pipe(
      catchError(() => {
        return throwError(() => new Error('Unauthorized: Invalid token'));
      })
    );
  }

  const newReq = req.clone({
    headers: new HttpHeaders({
      Authorization: `Bearer ${token}`,
    }),
  });

  return next(newReq).pipe(
    catchError((error) => {
      if (error.status === 401) {
        console.error('Unauthorized: Invalid token');
        authService.logout();
        // يمكنك هنا إضافة المزيد من الإجراءات مثل توجيه المستخدم إلى صفحة تسجيل الدخول
      }
      return throwError(() => error);
    })
  );
};
