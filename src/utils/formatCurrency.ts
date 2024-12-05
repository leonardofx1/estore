



export const formatCurrency = (value:number) => Intl.NumberFormat('pt-br',{style:'currency',currency:'BRL'}).format(value as number)
