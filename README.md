<p align="center">
<img src="https://i.ibb.co/pzJHWNc/logo.png" alt="web-gif" width="280"/>
  <br/>
<img src="https://i.ibb.co/mTgGdZF/protein-logo.png" alt="mobile-gif" width="40"/>
<img src="https://i.ibb.co/ZNFFJjk/Patika-Logo-min.webp" alt="mobile-gif" width="70"/>
</p>
</p>
  
Protein & Patika iş birliğiyle gerçekleştirilmiş React Bootcamp'inin bitirme projesi İkinci El Project!

Projenin canlıya alınmış haline ulaşmak için: [ <b>Canlı Demo</b> ](https://ikincielproject.vercel.app/)  
  
Projeyi gelecekte inceleyecek ve benzer deneyimleri yaşayacak kişilere bakış açısı katabilmek adına projenin teknik detaylarının dışında bazı konularada değinmek istedim, proje hakkında teknik bilgi için içerik kısmı üzerinden istediğiniz bölüme geçebilirsiniz.

## İçerik

- [Süreç](#süreç)
- [Kullanılan Teknolojiler](#kullandığım-teknolojiler)
- [Proje Kurulumu](#kurulum)
- [Projeden Görüntüler](#projeden-görüntüler)
- [Proje Performans Notları](#performans-notları)
- [Kaynaklar](#kaynaklar)

<br>

# Süreç
  
- Dahil olduğum Patika.dev & Proterin React Bootcamp'inin bitirme projesinde kullancıların ürün ekleyebileceği, alabileceği ve satış yapabileceği tam kapsamlı bir e-ticaret uygulaması yazdık, proje gereksinimleri paylaşıldığı an ek proje gereksinimlerine gözüm ister istemez kaydı. Bootcamp süresince over engineering'e olan meyilimimle tanınan birisi olarak piyasada bulunan boilerplate'leri alt üst edip, sıfırdan bir mimari ile SSR peşinde koşturup-.. Hepsinden vazgeçip SCSS ile proje üzerinde atomik dizaynı rahat işleyebileceğim mini bir framework yazmaya karar verdim-.. Next.js'i TypeScript template'i ile kurduktan sonra ise 3-4 günümü harcamış ve detaylı araştırmalar sonucu parça parça farklı yapılarda ilerleme kaydetmiş olsam bile 2 hafta içerisinde sonuca ulaşabilecek olmak gerçekçi gelmediği için dosyaları geri dönüşüm kutusuyla buluşturmak durumunda kaldım. Kaybettiğim demek istemediğim -- webpack konfigürasyonları arasında hiç tecrübe etmediğim deneyimler yaşarken fazlasıyla bilgi edindiğimi söyleyebilirim -- elbette proje teslim süresinin 2 hafta olduğu düşünüldüğünde bu noktada bir kayıp yaşadım. Storybook kurlumumunu gerçekleştirip https://infinum.com/handbook/frontend üzerinden okuduğum bir kaç yazı ve aklıma yatan yapı üzerinden projede ilerlemeye çalıştım. Bileşenlerimi tasarlarken Container/Presentational Pattern'e sadık kalmaya çalıştım. Kent C. Dodds'ın blogunda Compound bileşenleri görünce proje içerisinde kullanabileceğim alanlar olduğunu farkettim ve Select'leri bu şekilde oluşturmayı hedefledim. Bu ve bunun gibi proje süresi boyunca faydalandığım kaynakları README'nin sonunda paylaşarak benzer proje ve süreçlerden geçecek arkadaşlara gelecekte faydalı olabileceğini umuyorum. Proje içerisinde dağınık bıraktığım bir kaç nokta olduğunun farkındayım, üstüne ekleyeceğim feedback'lerle birlikte inceleme süreci bittikten sonra düzenleyeceğim.

<br>

## Kullandığım Teknolojiler

- ReactJS
- Formik
- Yup
- Axios
- react-dropzone
- react-router-dom
- react-helmet
- react-cookie
- Toastify
- Storybook (?)
- prop-tpyes (?)
- Vercel
  
(?) Geliştirme süresince kullandım, build alma gibi bir hayalim vardı ama çıkan aksakıklar ve zaman baskısı üst üste gelince rafa kaldırmam gerekti.
<br>

## Kurulum

- Öncelikle projeyi klonlayın.

```sh
git clone https://github.com/yigitcandonmez/protein-graduation-project.git
```

- Ardından gereksinimleri kurup projeyi ayağa kaldırabilirsiniz.

```bash
# install dependencies with npm
npm install & yarn install

# serve at localhost:3000
npm start & yarn start

```

<br>
<br>

# Projeden Görüntüler

<center>

### Web - Giriş Yap
<img src="https://i.ibb.co/f0f97PD/asd.png" alt="mobile-prew" width="100%"/>

### Web - Ana Sayfa

<img src="https://i.ibb.co/wQjMgmj/1.png" alt="mobile-prew" width="100%"/>

### Web - Ürün Detayları

<img src="https://i.ibb.co/GHQZCR4/productdetail.png" alt="mobile-prew" width="100%"/>

### Web - Hesabım

<img src="https://i.ibb.co/3Nt834K/4.png" alt="mobile-prew" width="100%"/>
<img src="https://i.ibb.co/VVrq4MP/ikincielproject-vercel-app-1.png" alt="mobile-prew" width="100%"/>

### Web - Yeni Ürün Ekle
<img src="https://i.ibb.co/0hwfGYP/3.png" alt="mobile-prew" width="100%"/>

### Mobile Tasarım

<p align="center">
<img src="https://i.ibb.co/PGLgL9W/mobiletwo.png" alt="mobile-prew" width="215"/>
<img src="https://i.ibb.co/NCDSQSy/mobileone.png" alt="mobile-prew" width="215"/>
<img src="https://i.ibb.co/fDktCzK/auth2.png" alt="mobile-prew" width="215"/>
<img src="https://i.ibb.co/s9nnyrk/auth.png" alt="mobile-prew" width="215"/>
<img src="https://i.ibb.co/Fh0nznZ/mobile.png" alt="mobile-prew" width="215"/>  
</p>
</center>

<br>
<br>

# Performans Notları

### Web

<p align="center">

  <img src="https://i.ibb.co/dGFFD44/perform.png" alt="mobile-prew" width="600"/>
</p>

## Mobile

<p align="center">

  <img src="https://i.ibb.co/f87gzZ2/perform2.png" alt="mobile-prew" width="600"/>
</p>

# Kaynaklar

Proje süresince yardım aldığım kaynaklar şu şekilde;
https://flaviocopes.com/react-server-side-rendering/ (Belki bu projede değil, elbet görüşeceğiz...)
http://jamesknelson.com/cruv-react-project-structure/
https://www.patterns.dev/posts/presentational-container-pattern/
https://blog.logrocket.com/understanding-react-compound-components/
https://medium.com/@learnreact/container-components-c0e67432e005
https://kentcdodds.com/blog/authentication-in-react-applications
https://kentcdodds.com/blog/how-to-optimize-your-context-value

Kaynakların kalanını yakın zamanda projede yaşadıklarımdan bahsedeceğim blogumda yazıyor olacağım, beklerim

https://medium.com/@yigitcandnmz
