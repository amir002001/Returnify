using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace returnify_api.Migrations
{
    public partial class AddsRetailer : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Returns_Retailers_RetailerId",
                table: "Returns");

            migrationBuilder.AlterColumn<Guid>(
                name: "RetailerId",
                table: "Returns",
                type: "TEXT",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"),
                oldClrType: typeof(Guid),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Returns_Retailers_RetailerId",
                table: "Returns",
                column: "RetailerId",
                principalTable: "Retailers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Returns_Retailers_RetailerId",
                table: "Returns");

            migrationBuilder.AlterColumn<Guid>(
                name: "RetailerId",
                table: "Returns",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(Guid),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Returns_Retailers_RetailerId",
                table: "Returns",
                column: "RetailerId",
                principalTable: "Retailers",
                principalColumn: "Id");
        }
    }
}
