import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './InformeCard.css'; // Asegúrate de crear este archivo CSS

export const InformeCard = React.memo(({ item, theme }) => (
  <Card className={`h-100 informe-card ${theme === 'dark' ? 'bg-dark text-light' : ''}`}>
    <Card.Img 
      variant="top" 
      src={item.imagen} 
      style={{ height: '200px', objectFit: 'cover' }}
    />
    <Card.Body className="d-flex flex-column">
      <Card.Title>{item.informe}</Card.Title>
      <Card.Text>
        {item.fecha}<br />
        {item.lugar}
      </Card.Text>
      <Button 
        variant={theme === 'dark' ? 'outline-light' : 'outline-dark'} 
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-auto"
      >
        {item.anio}
      </Button>
    </Card.Body>
  </Card>
));