import{r as d,j as t,C as L,a as S,b as D,c as B,D as M,R as g,d as x,e as P,s as k,f as w,g as E,Q as C,h as A,p as s,i as v,o as T,k as p,P as U}from"./index-BKNmzj2q.js";const _=e=>d.createElement("svg",{width:14,height:3,viewBox:"0 0 14 3",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M1.11572 1.5C5.80201 1.5 8.42943 1.5 13.1157 1.5",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),$=e=>d.createElement("svg",{width:14,height:15,viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M1.11572 7.50004H13.1157M7.11572 13.5V1.50004",stroke:"#363636",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})),z=e=>d.createElement("svg",{width:14,height:14,viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},d.createElement("path",{d:"M6.33331 3.66666H7.66665V4.99999H6.33331V3.66666ZM6.33331 6.33333H7.66665V10.3333H6.33331V6.33333ZM6.99998 0.333328C3.31998 0.333328 0.333313 3.31999 0.333313 6.99999C0.333313 10.68 3.31998 13.6667 6.99998 13.6667C10.68 13.6667 13.6666 10.68 13.6666 6.99999C13.6666 3.31999 10.68 0.333328 6.99998 0.333328ZM6.99998 12.3333C4.05998 12.3333 1.66665 9.93999 1.66665 6.99999C1.66665 4.05999 4.05998 1.66666 6.99998 1.66666C9.93998 1.66666 12.3333 4.05999 12.3333 6.99999C12.3333 9.93999 9.93998 12.3333 6.99998 12.3333Z",fill:"black"})),Q="data:image/svg+xml,%3csvg%20width='18'%20height='14'%20viewBox='0%200%2018%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.88428%2011.17L1.71428%207L0.294281%208.41L5.88428%2014L17.8843%202L16.4743%200.589996L5.88428%2011.17Z'%20fill='white'/%3e%3c/svg%3e",R="data:image/svg+xml,%3csvg%20width='18'%20height='14'%20viewBox='0%200%2018%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.88425%2011.17L1.71425%207L0.29425%208.41L5.88425%2014L17.8843%202L16.4743%200.589996L5.88425%2011.17Z'%20fill='black'%20fill-opacity='0.1'/%3e%3c/svg%3e",y=({checked:e,...n})=>t.jsxs(L,{$checked:e,children:[t.jsx(S,{type:"checkbox",checked:e,...n}),t.jsx(D,{src:e?Q:R})]}),N={minus:t.jsx(_,{}),plus:t.jsx($,{})},f=({sign:e,...n})=>t.jsx(B,{...n,children:N[e]}),W=({children:e,...n})=>t.jsx(M,{...n,children:e}),b=()=>{const e=g(x),[n,r]=P(k),i=c=>n.has(c),a=n.size===e.length;return{isChecked:i,isAllChecked:a,onCheckCartItem:c=>{const o=new Set(n);i(c)?o.delete(c):o.add(c),r(o)},onCheckAllCartItems:()=>{const c=a?new Set:new Set(e.map(o=>o.id));r(c)}}},Z=e=>{const n=w(x),r=w(k),i=()=>{n(l=>l.filter(c=>c.id!==e))},a=()=>{r(l=>(l.delete(e),l))};return{updateCartItems:i,updateSelectedCartItemIds:a,onDeleteItem:async()=>{await E(e),i(),a()}}},G=({id:e,quantity:n})=>{const r=w(x),i=()=>{const o=n+1;return o===C.max+1?(alert(`상품의 최대 주문 수량은 ${C.max}개입니다. ${C.max}개 이하로 주문해 주세요.`),n):o},a=()=>{const o=n-1;return o===0?(alert(`상품의 최소 주문 수량은 ${C.min}개입니다. 상품을 삭제하시려면 삭제 버튼을 이용해 주세요.`),n):o},m={minus:a,plus:i},l=o=>{r(h=>h.map(u=>u.id===e?{...u,quantity:o}:{...u}))};return{updateCartItems:l,getIncreasedQuantity:i,getDecreasedQuantity:a,onUpdateCartItemCount:async o=>{const h=m[o]();await A(e,h),l(h)}}},H=s.div`
  width: 100%;
`,I=s.div`
  border-top: 1px solid ${v.borderColor};
  padding: 12px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`,j=s.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  span {
    font-weight: 700;
  }
  span:nth-child(1) {
    font-size: 16px;
  }
  span:nth-child(2) {
    font-size: 24px;
  }
`,O=()=>{const{orderPrice:e,shippingPrice:n,totalPrice:r}=g(T);return t.jsxs(H,{children:[t.jsxs(I,{children:[t.jsxs(j,{children:[t.jsx("span",{children:"주문 금액"}),t.jsx("span",{children:p(e)})]}),t.jsxs(j,{children:[t.jsx("span",{children:"배송비"}),t.jsx("span",{children:p(n)})]})]}),t.jsx(I,{children:t.jsxs(j,{children:[t.jsx("span",{children:"총 결제 금액"}),t.jsx("span",{children:p(r)})]})})]})},V=s.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,F=s.p`
  padding-top: 2px;
  color: rgba(10, 13, 19, 1);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`,Y=({count:e})=>t.jsx(V,{children:t.jsxs(F,{children:["현재 ",e,"종류의 상품이 담겨 있습니다."]})}),K=s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`,J=s.span`
  color: rgba(10, 13, 19, 1);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`,X=s.span`
  color: rgba(0, 0, 0, 1);
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
`,q=s.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`,tt=({cartItem:e})=>{const{product:n,quantity:r}=e,{onUpdateCartItemCount:i}=G(e);return t.jsxs(K,{children:[t.jsx(J,{children:n.name}),t.jsx(X,{children:p(n.price)}),t.jsxs(q,{children:[t.jsx(f,{onClick:()=>i("minus"),sign:"minus"}),t.jsx("span",{children:r}),t.jsx(f,{onClick:()=>i("plus"),sign:"plus"})]})]})};s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;const et=s.span`
  color: rgba(10, 13, 19, 1);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`,nt=s.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  gap: 4px;
`,st=s.section`
  margin-top: 20px;
  width: 100%;
`;s.li`
  padding-top: 12px;
`;s.div`
  width: 112px;
  height: 112px;
  border-radius: 8px;
`;s.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
`;const it=()=>{const{isAllChecked:e,onCheckAllCartItems:n}=b(),r=g(x);return t.jsxs("div",{children:[t.jsxs(nt,{children:[t.jsx(y,{checked:e,onChange:n}),t.jsx(et,{children:"전체 선택"})]}),t.jsx(st,{children:r.map(i=>t.jsx(lt,{cartItem:i},i.id))})]})},ot=s.li`
  border-top: 1px solid ${v.borderColor};
  padding-top: 12px;
  margin-top: 12px;
`,rt=s.img`
  width: 112px;
  height: 112px;
  border-radius: 8px;
`,ct=s.div`
  display: flex;
  gap: 24px;
  margin-top: 12px;
`,at=s.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,lt=({cartItem:e})=>{const{onDeleteItem:n}=Z(e.id),{isChecked:r,onCheckCartItem:i}=b();return t.jsxs(ot,{children:[t.jsxs(at,{children:[t.jsx(y,{checked:r(e.id),onChange:()=>i(e.id)}),t.jsx(W,{onClick:n,children:"삭제"})]}),t.jsxs(ct,{children:[t.jsx(rt,{src:e.product.imageUrl}),t.jsx(tt,{cartItem:e})]})]})},dt=s.section`
  margin-top: 20px;
  width: 100%;
`,pt=s.p`
  padding: 52px 0px 12px 0px;
  display: flex;
  align-items: center;
  gap: 4px;
`,xt=s.span`
  padding-top: 2px;
  color: rgba(10, 13, 19, 1);
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
`,ht=s.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 64px * 2 - 100px);
`,gt=()=>{const e=g(x);return t.jsx(t.Fragment,{children:e.length===0?t.jsx(ht,{children:"장바구니에 담은 상품이 없습니다."}):t.jsxs(t.Fragment,{children:[t.jsx(Y,{count:e.length}),t.jsx("div",{children:t.jsx(dt,{children:t.jsx(it,{cartItems:e})})}),t.jsxs(pt,{children:[t.jsx(z,{}),t.jsxs(xt,{children:["총 주문 금액이 ",p(U.freeShippingMinAmount)," 이상일 경우 무료 배송됩니다."]})]}),t.jsx(O,{})]})})};export{gt as default};
