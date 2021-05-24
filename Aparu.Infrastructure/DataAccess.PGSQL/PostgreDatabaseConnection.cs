using System;
using System.Data;
using Aparu.Infrastructure.Interfaces;
using Microsoft.Extensions.Options;
using Npgsql;

namespace Aparu.Infrastructure.DataAccess.PGSQL
{
    public class PostgreDatabaseConnection : IDatabaseConnection
    {

        private readonly DatabaseOptions _options;
        public PostgreDatabaseConnection(IOptions<DatabaseOptions> options)
        {
            _options = options.Value;
        }

        public IDbConnection GetConnection()
        {
             IDbConnection connection = new NpgsqlConnection(_options.ConnectionString);
            connection.Open();

            return connection; 
        }
    }
}