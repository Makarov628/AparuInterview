using System;
using System.Data;

namespace Aparu.Infrastructure.Interfaces
{
    public interface IDatabaseConnection
    {
        IDbConnection GetConnection();
    }
}