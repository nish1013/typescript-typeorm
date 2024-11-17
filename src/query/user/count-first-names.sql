SELECT 
    CASE 
        WHEN first_name IS NULL OR first_name = '' THEN 'Anonymous' 
        ELSE first_name 
    END AS display_name, 
    COUNT(*) AS total 
FROM social.user 
GROUP BY 
    CASE 
        WHEN first_name IS NULL OR first_name = '' THEN 'Anonymous' 
        ELSE first_name 
    END;
