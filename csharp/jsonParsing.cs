using System;
using System.Text.Json;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        string json = @"[{""id"": 123, ""name"": ""details""}, ...]";

        // Deserialize the JSON string into a list of objects
        var items = JsonSerializer.Deserialize<List<Dictionary<string, object>>>(json);

        // Iterate through the items and print id and name
        foreach (var item in items)
        {
            Console.WriteLine($"ID: {item["id"]}, Name: {item["name"]}");
        }
    }
}
