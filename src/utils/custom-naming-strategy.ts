import { DefaultNamingStrategy, NamingStrategyInterface } from "typeorm";
import { snakeCase } from "typeorm/util/StringUtils";

export class CustomNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {
  // Remove 'Entity' suffix from table names and convert to lowercase
  tableName(targetName: string, userSpecifiedName?: string): string {
    return (userSpecifiedName || targetName.replace(/Entity$/, "")).toLowerCase();
  }

  // Convert column names to snake_case and lowercase
  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return snakeCase(embeddedPrefixes.join("_") + (customName || propertyName));
  }

  // Convert relation names to snake_case and lowercase
  relationName(propertyName: string): string {
    return snakeCase(propertyName);
  }
}