# Prompts para Gemini — 4 imágenes de proyectos (mismo sistema visual)

Cada prompt genera UNA imagen 16:9 (1920×1080). Los datos van dados: la IA compone,
no inventa.

## Prefijo común (va al inicio de los 4 prompts)

```
Design a wide 16:9 dark-mode web application interface screenshot, 1920x1080, that looks
like a real production SaaS dashboard. Absolute flat UI, no 3D, no mockup device frame,
no floating phone or laptop, no glossy reflections, no purple/violet gradient, no neon glow,
no drop shadows on cards, no isometric perspective.

Color palette (use exactly):
- page background #0c1016
- panel surface #131922
- raised surface #1a2230
- hairline border #263044
- primary text #e6eaf2
- secondary text #b9c3d6
- muted text #8b97ad
- accent blue #7cb7ff (used for highlights, key numbers, progress bars)
- accent on blue #06121f (text inside blue buttons)

Typography:
- Big display headings and large numbers: Bricolage Grotesque, extra bold (800),
  tight letter spacing, geometric grotesque with slight quirk.
- Body text and labels: Geist, regular (400) and medium (500).
- Small captions, tags, and numeric readouts: Geist Mono, regular.

Layout: generous padding, 12px corner radius on panels, 1px hairline borders,
left-aligned content, clear visual hierarchy: one dominant element per panel.
No vertical sidebar. Content fills the frame edge to edge.

Text must be sharp, legible and correctly spelled. Use the exact words given below.
```

---

## 1. Transporte — el viaje es la unidad de valor

```
[PREFIJO COMÚN]

Two-column layout. This is a transport-company management system. The key insight is
that a trucker wants to know how much money he made on EACH trip, so the trip is the
hero of the composition, not a generic dashboard.

LEFT PANEL (60% width), contains in order:
- small monospace caption "Viaje en curso"
- huge display heading "San Juan" in #e6eaf2, extra bold, about 76px
- second heading "Buenos Aires" in accent blue #7cb7ff, about 46px
- a thin horizontal route line with a filled accent dot at the left end and a hollow
  dot at the right end; under it small mono labels "Origen" (left), "412 km" (center,
  accent), "Destino" (right)
- a row of three small stat panels side by side, each with a mono caption above a
  huge number: "Kilómetros" / "412" with small unit "km"; "Litros" / "2.974" with
  unit "L"; "Ganancia" / "$184.500" in accent blue on a slightly blue-tinted panel
- a small mono caption "Desglose" followed by three rows, each with a label on the
  left, an amount right-aligned in mono, and a thin progress bar underneath:
  "Flete" / "$268.000" with a bar at 78% in accent blue;
  "Combustible" / "$83.500" with a bar at 30% in warm amber #ffcf7a;
  "Peajes y gastos" / "$0" with an empty bar

RIGHT PANEL (40% width), contains:
- small mono caption "Viajes de octubre 2026"
- two compact trip rows, each with a bold display name, a mono detail line and a
  thin progress bar: "MENDOZA CON BIN" / "San Luis · 268 km · 1.880 L" / "$121.300"
  in accent blue right-aligned; then "SODECAR CORTO" / "Buenos Aires · 196 km ·
  1.240 L" / "$96.700"
- small mono caption "Del mes", a huge display number "$8.913.037", and a mono line
  "ganancia acumulada en 48 viajes"
- a separate smaller panel with mono caption "Multi-empresa", body text
  "Cada empresa ve" in regular, then "solo sus viajes" in large extra-bold display,
  and a mono line "Aislamiento de datos por tenant"
```

## 2. Caja de feria — el pedido entra y el stock se descuenta solo

```
[PREFIJO COMÚN]

Two-column layout. This is a point-of-sale system for a stationery stall at a fair.
The magic of the product is that a seller's phone order reaches the checkout in real
time and stock deducts itself, so show THAT moment, not a sales dashboard.

LEFT PANEL (52% width):
- small mono caption "Pedido del vendedor"
- display heading "mariano" in extra bold, about 40px, lowercase as written
- mono line "Puesto 14 · Ferias de Córdoba"
- small accent caption "En vivo"
- a vertical timeline: a thin vertical line on the left with three dots, the first two
  accent blue filled, the third an empty outline dot. To the right of each dot:
  "El pedido entró" with mono subline "a las 9:41";
  "Caja lo recibe" with mono subline "en tiempo real";
  "Stock descontado" with mono subline "automáticamente" and below it a small
  pill-shaped outlined tag with accent border and accent text reading "SIN RECARGAR"
- mono caption "Total del pedido", a huge display number "$79.710" with a small
  mono "6 u." to its right, then a line "Cuaderno Universitario A4" and a mono line
  "34 unidades en stock antes · 28 ahora"

RIGHT PANEL (48% width), two stacked panels:
TOP: mono caption "La caja", display heading "Cobros de hoy", huge number "$147.990",
mono "9 pedidos cobrados", then mono caption "Stock por producto" and three rows with
name left, mono stock count right-aligned, and a thin progress bar under each:
"Cuaderno A4" / "28 u." (bar 82%), "Birome trazo fino" / "11 u." (bar 24%),
"Notas adhesivas" / "19 u." (bar 55%)
BOTTOM: mono caption "Pedidos" and a clean four-row table, no gridlines, each row with
a small colored dot at the far left, client name, product name, quantity in mono, and
right-aligned mono amount: "mariano" / "Cuaderno A4" / "6 u." / "$79.710" (dot amber);
"martina" / "Birome trazo fino" / "3 u." / "$68.280" (dot blue);
"martina" / "Notas adhesivas" / "6 u." / "$34.100" (dot green);
"mariano" / "Marcadores punta fina" / "3 u." / "$21.600" (dot red)
Below the table, a mono line "Exportable a Excel y PDF".
```

## 3. Miami Getaway — el producto es la experiencia en Miami

```
[PREFIJO COMÚN]

Full-bleed photographic background: aerial view of the Miami Beach coastline at golden
hour, turquoise ocean on the right, high-rise buildings along the shore, palm trees.
The photograph must remain clearly visible through the interface layer.

Overlay the dark interface on top with semi-transparent panels (about 80% opaque
#0c1016), leaving the photograph visible in the gaps and behind the panels.

Top left: display heading "Miami Get Away" in extra bold, and below it a mono line
"Your Miami stay, one message away". Top right: "Apartments" and below in mono
"Villas · Yachts · Cars · Transfers".

Below, one wide translucent search bar spanning most of the width, divided into three
sections by thin vertical hairlines, each with a small mono label above a larger
regular text: "Dónde" / "¿A dónde vas?"; "Cuándo" / "Agregá fechas";
"Servicios" / "Apartamento, villa, yate, auto". At the right end of the bar, a solid
accent blue button with dark text reading "Ver disponibilidad".

Below that, a display heading "Todo lo que necesitás en Miami, de una sola empresa",
then a row of four equal translucent panels: "Apartamentos" with mono subline "desde
$150 la noche" and a thin bar at 86%; "Villas" / "con pileta, para grupos" / bar 52%;
"Yates" / "con capitán, $200 la hora" / bar 68%; "Autos" / "deportivo o de lujo" / bar 74%.

Bottom row, two translucent panels:
LEFT: mono caption "46 apartamentos en el mapa", display heading "Hyde Beach House",
mono "Hollywood", and on the right side of the same row large accent text "desde $350"
with small mono "por noche" beneath it. Below: "Fotos de cada propiedad" and
"Reseñas sincronizadas desde Google".
RIGHT: mono caption "Reservas y pagos", two big display numbers with regular labels
beside them: "46" / "apartamentos" and "34" / "yates y autos". Along the bottom a single
row of small regular labels: "Reservas" "Pagos" "Clientes" "Proveedores" and "PDF"
right-aligned.
```

## 4. Objetivos con IA — el coach lee tu contexto antes de responder

```
[PREFIJO COMÚN]

Two-column layout. This is a personal goal-tracking app whose differentiator is an AI
coach that READS your goals, pending tasks and journal entries BEFORE answering, then
compares your progress against the same period last year. Show the reading on the left
and the honest answer on the right.

LEFT PANEL (44% width):
- mono caption "Lo que el coach lee antes de responder"
- three stacked panels, each with a small accent dot, a bold display label, a regular
  line and a mono line:
  "Tus objetivos" / "Facturación mensual promedio" / "4% · detrás del año";
  "Tus tareas pendientes" / "12 abiertas · 3 vencen esta semana" / "7 días de racha de estudio";
  "Tus reflexiones" / "Última: \"no quiero crecer sin margen\"" / "Del diario, 22 de octubre"
- mono caption "Avance del año" with "81%" right-aligned in accent mono, a progress bar
  at 81% in accent blue, then small mono "Ene" at the left and "Dic" at the right
- a line with regular "Tu año:" followed by bold display "70 días restantes"

RIGHT PANEL (56% width):
- mono caption "El coach", display heading "Hola, Ignacio.", mono "Seguí tu Coach."
- a large chat bubble panel with a blue-tinted background where the AI's answer is set
  in regular weight, left aligned, five lines:
  "Facturación mensual es lo único"
  "atrasado. El resto del año vas bien."
  "Pero no te lo voy a maquillar:"
  "si no subís el precio, este objetivo"
  "no llega. Te propongo tres tareas."
- mono caption "Foco de hoy — top 3" and three rows, each with a small circle outline on
  the left (the first one in accent blue, the others in hairline grey) and regular text:
  "¿Cuál es tu prioridad #1 hoy?"; "Confirmar flete y hacer el primer pedido";
  "Facturar $2M con un producto"
- at the bottom, a small pill-shaped outlined tag with accent border and accent mono
  text "MEMORIA", followed by a regular grey line
  "Recuerda lo que le contaste entre conversaciones"
```

---

## Notas de uso

- **Formato:** pedí 16:9 / 1920×1080. Si Gemini devuelve otra relación, recortá.
- **Idioma:** los textos van en español, tal cual están arriba. No los traduzcas.
- **Si Gemini inventa números o texto ilegible:** regenerá. La legibilidad del texto
  es lo que hace que un técnico confíe en la imagen.
- **Si Gemini mete el aesthetic default** (mockup de dispositivo, degradado violeta,
  glow, 3D): insistí con *"flat 2D UI, no device mockup, no purple gradient, no 3D,
  no glow"*. Gemini cede con esa frase.
- **Vos después:** exportá a WebP con `cwebp -q 88 -m 6`, ponelo en
  `public/proyectos/<nombre>.webp` y dejá el `crop` en `[0, 60, 1920]`
  (ventana 2:1 centrada sobre la imagen de 1080 de alto).
