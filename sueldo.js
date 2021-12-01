function algoritmo(costo_normal,horas_trabajadas,salario)
{
    
    
    salario=horas_trabajadas*costo_normal;
    if(horas_trabajadas>40)
        salario=salario+(horas_trabajadas-40)*costo_normal;
    if(horas_trabajadas>48)
        salario=salario+(horas_trabajadas-48)*costo_normal;
        console.info("coste normal:", costo_normal)
    
       console.log("horas de trabajo:", horas_trabajadas);
       console.log("el salario total:", salario);
   
}

algoritmo(1000,44,1000)
 