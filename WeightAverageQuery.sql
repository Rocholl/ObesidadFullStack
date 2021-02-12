SELECT c.nombre as "Centro", avg(he.peso) AS "Average Weight" 
FROM healthextends as he, health as h, centros as c
WHERE he.idHealth=h.idHealths and c.idCentro=h.idCentro and he.fecha between "2021-01-01" AND "20210128"
GROUP BY c.nombre;