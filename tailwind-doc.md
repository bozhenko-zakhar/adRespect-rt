# Tailwind Cheat Sheet

---

# 📦 Layout

### display

```css
display: flex | block | none;
```

```tw
flex | block | hidden
```

---

### flex-direction

```css
flex-direction: row | column;
```

```tw
flex-row | flex-col
```

---

### justify-content

```css
justify-content: center | space-between | flex-start | flex-end;
```

```tw
justify-center | justify-between | justify-start | justify-end
```

---

### align-items

```css
align-items: center | flex-start | flex-end;
```

```tw
items-center | items-start | items-end
```

---

### gap

```css
gap: n × 4px;
```

```tw
gap-(n)
```

examples

```
4px  -> gap-1
16px -> gap-4
32px -> gap-8
48px -> gap-12
```

---

# 📍 Position

### position

```css
position: relative | absolute | fixed;
```

```tw
relative | absolute | fixed
```

---

### inset

```css
top:0;
right:0;
bottom:0;
left:0;
```

```tw
top-0
right-0
bottom-0
left-0
```

---

### inset all

```css
inset:0;
```

```tw
inset-0
```

---

### custom position

```css
top:20px;
```

```tw
top-5
```

---

### center absolute

```css
top:50%;
left:50%;
transform:translate(-50%,-50%);
```

```tw
top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
```

---

### translate

```css
translateY(-50%);
```

```tw
-translate-y-1/2
```

---

### rotate

```css
rotate(45deg);
rotate(-45deg);
```

```tw
rotate-45
-rotate-45
```

---

# 📏 Size

### width

```css
width:100%;
width:auto;
width:100px;
```

```tw
w-full
w-auto
w-[100px]
```

---

### height

```css
height:100%;
height:auto;
height:19px;
height:100px;
```

```tw
h-full
h-auto
h-[19px]
h-[100px]
```

---

### min-width

```css
min-width:320px;
max-width:375px;
```

```tw
min-w-[320px]
max-w-[375px]
```

---

# 📦 Margin & Padding

### margin

```css
margin-top;
margin-bottom;
margin-inline;
margin-block;
```

```tw
mt-
mb-
mx-
my-
```

---

### padding

```css
padding;
padding-inline;
padding-block;
```

```tw
p-
px-
py-
pl-
pr-
pt-
pb-
```

Scale

```
4px  = 1
8px  = 2
12px = 3
16px = 4
20px = 5
24px = 6
32px = 8
40px = 10
48px = 12
64px = 16
```

Example

```css
padding:40px 48px;
```

```tw
py-10 px-12
```

---

# 🎨 Background

### background-color

```css
background:white;
background:transparent;
```

```tw
bg-white
bg-transparent
```

---

### rgba

```css
rgba(0,0,0,.3)
rgba(0,0,0,.4)
```

```tw
bg-black/30
bg-black/40
```

---

### linear-gradient

```css
background: linear-gradient(360deg, #dcc1ab 0%, rgba(214,183,158,0) 100%);
```

```tw
bg-linear-[360deg]
from-beige
to-transparent
```

---

### background-image

```css
background-image:url(...);
```

```tw
bg-[url(...)]
```

(або залишити у CSS, якщо змінюється через JS)

---

### background-position

```css
background-position:center;
```

```tw
bg-center
```

---

### background-repeat

```css
background-repeat:no-repeat;
```

```tw
bg-no-repeat
```

---

### background-size

```css
background-size:cover;
```

```tw
bg-cover
```

---

# 🟫 Border

### border

```css
border:none;
```

```tw
border-0
```

---

```css
border:1px solid #f5f0ec;
```

```tw
border border-[#f5f0ec]
```

---

### border side

```css
border-top:none;
border-left:none;
```

```tw
border-t-0
border-l-0
```

---

### radius

```css
border-radius:200px;
```

```tw
rounded-full
```

---

```css
border-bottom-left-radius:20px;
border-bottom-right-radius:20px;
```

```tw
rounded-bl-[20px]
rounded-br-[20px]
```

---

# 📝 Typography

### font-family

```css
Inter
Montserrat
```

```tw
font-inter
font-montserrat
```

---

### font-weight

```css
400
500
600
700
```

```tw
font-normal
font-medium
font-semibold
font-bold
```

---

### font-style


```css
font-style: italic
```

```tw
italic
```

---

### font-size

```css
14px
16px
18px
```

```tw
text-sm
text-base
text-lg
```

---

### line-height

```css
1.5
```

```tw
leading-normal
```

---

### letter-spacing

```css
-0.01em
-0.05em
```

```tw
tracking-[-0.01em]
tracking-[-0.05em]
```

---

### text

```css
text-align:center;
text-decoration:none;
```

```tw
text-center
no-underline
```

---

### color

```css
color:#111;
```

```tw
text-[#111]
```

---

### fill

```css
fill:#111;
fill:currentColor;
```

```tw
fill-[#111]
fill-current
```

---

# 🖼 Images

### object-fit

```css
object-fit:cover;
```

```tw
object-cover
```

---

# ⚡ Effects

### opacity

```css
opacity:0;
opacity:1;
```

```tw
opacity-0
opacity-100
```

---

### pointer-events

```css
pointer-events:none;
pointer-events:auto;
```

```tw
pointer-events-none
pointer-events-auto
```

---

### overflow

```css
overflow:hidden;
overflow-x:hidden;
overflow-y:auto;
```

```tw
overflow-hidden
overflow-x-hidden
overflow-y-auto
```

---

### cursor

```css
cursor:pointer;
```

```tw
cursor-pointer
```

---

### z-index

```css
z-index:999;
```

```tw
z-[999]
```

---

# 🎞 Transition

### transition

```css
transition:width .15s ease;
transition:height .15s ease;
transition:border .15s ease;
```

```tw
transition-[width]
transition-[height]
transition-[border]

duration-150
ease-in-out
```

---

```css
transition:width,height,border .15s ease;
```

```tw
transition-[width,height,border]
duration-150
ease-in-out
```

---

### transition-delay

```css
transition-delay:.3s;
```

```tw
delay-300
```

---

# ✨ Pseudo-elements

### ::after

```css
content:"";
position:absolute;
inset:0;
pointer-events:none;
```

```tw
after:content-['']
after:absolute
after:inset-0
after:pointer-events-none
```

---

### overlay

```css
background:rgba(0,0,0,.4);
```

```tw
after:bg-black/40
```

---

### ::before

```css
content:"";
```

```tw
before:content-['']
```

---

# 📱 Responsive

```css
@media(min-width:768px)
```

```tw
tablet:
```

---

```css
@media(min-width:1440px)
```

```tw
desktop:
```

---

```css
@media(min-width:768px) and (max-width:1439px)
```

```tw
tablet:max-desktop:
```