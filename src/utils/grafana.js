/**
 * Genera los parámetros de tiempo para Grafana basados en la fecha actual.
 * @returns {Object} Objeto con parámetros from, to y var-dia
 */
export const getGrafanaParams = (type = 'daily') => {
  const now = new Date();
  
  if (type === 'daily') {
    // Para el dashboard diario:
    // var-dia: YYYY-MM-DD del día actual
    // from/to: Ajustados para cubrir el día completo en el huso horario local
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const varDia = `${year}-${month}-${day}`;

    // Creamos objetos de fecha para el inicio y fin del día actual (00:00 a 23:59)
    const fromDate = new Date(now);
    fromDate.setHours(0, 0, 0, 0);
    
    const toDate = new Date(now);
    toDate.setHours(23, 59, 59, 999);

    return {
      from: fromDate.getTime(),
      to: toDate.getTime(),
      'var-dia': varDia,
      timezone: 'browser',
      orgId: '1',
      kiosk: 'tv'
    };
  } else {
    // Para el dashboard semanal: últimos 7 días hasta ahora
    const toDate = new Date(now);
    const fromDate = new Date(now);
    fromDate.setDate(fromDate.getDate() - 7);

    return {
      from: fromDate.getTime(),
      to: toDate.getTime(),
      timezone: 'browser',
      orgId: '1',
      kiosk: 'tv'
    };
  }
};

/**
 * Construye la URL completa con query params
 */
export const buildGrafanaUrl = (baseUrl, params) => {
  const url = new URL(baseUrl);
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  return url.toString();
};
