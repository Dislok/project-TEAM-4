import React, { useMemo } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useTheme } from '../../../context/ThemeContext';

export const DocumentTable = ({ documentData }) => {
  const { theme } = useTheme();

  const memoizedTable = useMemo(() => (
    <Table 
      striped 
      bordered 
      className={`acordeonTabla text-center ${theme === 'dark' ? 'table-dark' : ''}`}
    >
      <tbody>
        {documentData.map((item, index) => (
          <React.Fragment key={index}>
            {item.title && (
              <tr>
                <td colSpan="3">
                  <p>{item.title}</p>
                </td>
              </tr>
            )}
            {item.link && (
              <tr>
                <td>
                  <div>
                    <i className={item.icon}></i>
                  </div>
                </td>
                <td className="text-left">{item.title}</td>
                <td>
                  <div>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <Button 
                        variant={theme === 'dark' ? 'outline-light' : 'outline-primary'} 
                        size="sm"
                      >
                        {item.buttonText}
                      </Button>
                    </a>
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </Table>
  ), [documentData, theme]);

  return memoizedTable;
};